FROM ubuntu:18.04

WORKDIR /app

RUN apt-get -qq update && apt-get -qq -y install curl zip unzip \
  && curl -fsSL https://deno.land/x/install/install.sh | sh \
  && apt-get remove curl zip unzip -y
RUN echo 'export DENO_INSTALL="/root/.deno"' >> ~/.bash_profile
RUN echo 'export PATH="$DENO_INSTALL/bin:$PATH"' >> ~/.bash_profile

RUN '/root/.deno/bin/deno' install -qA -f --unstable https://deno.land/x/denon@2.3.2/denon.ts

COPY ./config /app
COPY ./src /app/script

CMD ["tail", "-f", "/dev/null"]
