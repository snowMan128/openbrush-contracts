FROM rust

RUN apt-get update && \
    apt-get install libclang-dev -y && \
    apt-get install nodejs -y && \
    apt-get install npm -y && \
    apt-get install binaryen -y

RUN npm install -g n && \
    npm install -g yarn && \
    n stable

RUN curl -sSf https://sh.rustup.rs/ | sh -s -- --default-toolchain nightly -y

RUN rustup component add rust-src --toolchain nightly-x86_64-unknown-linux-gnu
RUN rustup target add wasm32-unknown-unknown

RUN cargo install cargo-dylint dylint-link

RUN cargo install --force cargo-contract && \
    cargo install contracts-node --git https://github.com/paritytech/substrate-contracts-node.git --force --locked
