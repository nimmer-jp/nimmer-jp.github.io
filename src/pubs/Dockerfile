FROM ubuntu:18.04

WORKDIR /app

RUN apt-get -qq update && apt-get -qq -y install curl zip unzip \
  && curl -fsSL https://deno.land/x/install/install.sh | sh \
  && apt-get remove curl zip unzip -y

ENV DENO_INSTALL '/root/.deno'
ENV PATH '$DENO_INSTALL/bin:$PATH'

COPY ./config /app
COPY ./src /app/src

CMD ["/root/.deno/bin/deno", "bundle", "--unstable", "--importmap=/app/imports.json", "-c", "/app/tsconfig.json", "/app/src/index.ts", "/app/build/bundle.js"]
