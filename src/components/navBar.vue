<template>
  <div id="nav">
    <router-link to="/">Landing</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/AllProperties">All Properties</router-link>
    <router-link to="/Admin">Admin</router-link>
  </div>
</template>

<style>
#nav {
  padding: 30px;
  background-color: #242424;
  box-shadow: 3px 3px 3px 1px rgba(0, 0, 0, 0.442);
  position: sticky;
  top: 0;
  z-index: 100;
}

#nav a {
  font-weight: bold;
  color: #53f5e5;
  margin: 1rem;
  text-decoration: none;
  word-break: keep-all;
}

#nav a.router-link-exact-active {
  color: #53f5e5;
}
#nav a:hover {
  color: whitesmoke;
}
</style>
