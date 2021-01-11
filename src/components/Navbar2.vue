<template>
<div>
  <b-navbar toggleable="sm" type="light" variant="success">

    <b-navbar-brand to="/">NYSL</b-navbar-brand>
  <b-navbar-toggle target="navbar-toggle-collapse">
      <template #default="{ expanded }">
        <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
        <b-icon v-else icon="chevron-bar-down"></b-icon>
      </template>
    </b-navbar-toggle>
   <b-collapse id="navbar-toggle-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item to="/home"><b-icon icon="house-door-fill"></b-icon> Home</b-nav-item>
        <b-nav-item to="/about"><b-icon icon="question-circle-fill"></b-icon> About</b-nav-item>
        <b-nav-item to="/contact"><b-icon icon="chat-text-fill"></b-icon> Contact</b-nav-item>
        <b-nav-item to="/info"><b-icon icon="exclamation-circle-fill"></b-icon> Info</b-nav-item>
        <b-nav-item to="/registration"><b-icon icon="input-cursor-text"></b-icon> Registration</b-nav-item>
        <b-nav-item to="/rules"><b-icon icon="layout-text-sidebar-reverse"></b-icon> Rules</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>

</template>

