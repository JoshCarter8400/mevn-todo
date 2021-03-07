<template>
  <header>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top custom-bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"
          ><img
            style="max-height: 25px"
            alt="Vue logo"
            src="../assets/logo.png"
          />Task Manager</a
        >
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav ml-auto mb-2 mb-md-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Tasks</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Register</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Login</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Logout</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Josh</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
