# Architecture
Domain-oriented Angular 20 standalone application. Components use typed services rather than `HttpClient` directly. Access tokens remain in memory in `AuthStore`; refresh tokens are assumed to be secure HttpOnly cookies. Complex feature state is represented with signals and feature stores, with future migration points to NgRx Signal Store generated stores.
