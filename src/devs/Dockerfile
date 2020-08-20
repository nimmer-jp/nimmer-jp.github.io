FROM ubuntu:18.04

WORKDIR /app

RUN apt-get -qq update && apt-get -qq -y install curl zip unzip \
  && curl -fsSL https://deno.land/x/install/install.sh | sh \
  && apt-get remove curl zip unzip -y

ENV DENO_INSTALL '/root/.deno'
ENV PATH '$DENO_INSTALL/bin:$PATH'

RUN deno install -qA -f --unstable https://deno.land/x/denon@2.3.2/denon.ts

COPY ./config /app
COPY ./src /app/script

CMD ["tail", "-f", "/dev/null"]
