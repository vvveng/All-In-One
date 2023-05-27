version: '3'
services:
  snell:
    image: altriabot/snell
    container_name: snell
    restart: always
    environment:
      - PORT=30721
      - PSK=6Xn97Xd299jq4Yag8YVmf96B4K
      - OBFS=off
    volumes:
      - ~/snell:/etc/snell
    networks:
      - snellnet

  shadow-tls:
    image: ghcr.io/ihciah/shadow-tls:latest
    container_name: shadow-tls
    restart: always
    ports:
      - 8443:8443 
    environment:
      - MODE=server
      - V3=1
      - LISTEN=0.0.0.0:8443
      - SERVER=snell:30721
      - TLS=mp.weixin.qq.com:443
      - PASSWORD=aMT3Fa2p9vmy82DLWUmjwo9
    networks:
      - snellnet

networks:
  snellnet: