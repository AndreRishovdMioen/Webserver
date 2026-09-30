# Cloudflare
- [x] CF tunnel // 03:00h
- [x] HTTPS (auto implemented) // 0h
- [x] DDoS protection (auto implemented) // 0h

# DevOps
- [ ] Auto deploy main pushes (IaC / terraform)
- [ ] Auto fall back on failed startup after pull
- [ ] Prod server and Test server
- [ ] Email service warnings
- [ ] Multiple repo support
- [ ] Secrets manager (hashicorp vault?)
- [ ] Flowchart for creating new module (one file per service)
  - [ ] Java (21) & JDK (24 Oracle OpenJDK 24.0.2)
  - [ ] Maven dependencies
  - [ ] .gitignore
  - [ ] .dockerignore
  - [ ] ReadMe.md (about)
  - [ ] update docker-compose.yml
    - [ ] allow multiple instances
    - [ ] port range
  - [ ] CORS config in \Webserver
  - [ ] Dockerfile
    - [ ] Auto restart config
  - [ ] Update port map
  - [ ] Update API map
  - [ ] Tests

# Frontend
- [x] Navbar // 03:00h
  - [x] Home
  - [x] About
    - [x] Project GitHub href
    - [ ] Project README.md
    - [x] Project FEATURES.md

  - [x] Projects
    - [ ] Collapsing folder 
    - [ ] Project tags
    - [ ] Video demo
  - [x] Contact

- [ ] Bottom of page
  - [x] Contact
  - [x] Privacy policy
  - [x] Copyright

- [ ] CSS
  - [x] Tailwind
  - [ ] Font
  - [x] Background color
  - [ ] Boxes

- [ ] Loading indicator
- [ ] Skeleton
- [ ] Reusable files pipeline.md
- [ ] Multiple languages (l18n)



# Backend
- [ ] API standard

## Services:
### Gateway
- [ ] Security
  - [ ] CORS config
  - [ ] TLS (Transport Layer Security)

- [ ] Consul
  - [ ] Load balancer
  - [ ] Common port to frontend
  - [ ] Health check site

### OCR (Optical Character Recognition)
- [ ] Read text from image
- [ ] API
  - [ ] POST
    - [ ] max file size
    - [ ] return text as json

### Public guest book
- [ ] Frontend form
- [ ] Same repo as webserver
- [ ] API
  - [ ] GET
  - [ ] POST
  - [ ] DELETE
- [ ] Postgresql database
  - [ ] Postgresql credentials
- [ ] Tests
  - [ ] Services
  - [ ] Test-database r/w

### Multithread demo