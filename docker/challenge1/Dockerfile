FROM golang:alpine AS builder

COPY hello.go /go

RUN go build -ldflags "-s -w" hello.go

FROM scratch

COPY --from=builder /go/hello /

CMD [ "/hello" ]
