<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">Shoping helper</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link class="nav-link" to="/">My Carts<span class="sr-only">(current)</span></router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/history">History</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/add">Add cart</router-link>
          </li>
        </ul>
      </div>
    </nav>
    </div>
</template>

<script>
export default {
    name:'Header'
}
</script>