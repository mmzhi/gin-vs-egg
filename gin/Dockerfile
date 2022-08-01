FROM golang:1.18.4-alpine as builder

WORKDIR /usr/src/app

COPY . .

RUN GOPROXY="https://goproxy.cn" CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o app .

FROM alpine:3.16.1 as prod

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/app ./
COPY ./templates ./templates
COPY ./static ./static

EXPOSE 8080

CMD ["./app"]