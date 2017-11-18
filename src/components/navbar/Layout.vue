<template>
  <div>
    <header class="container-fluid">
        <div class="container">
            <div class="row">
                <div class="col-xs-6">
                    <a v-bind:href="'/'"><img v-bind:src="'/static/img/logo-del-barrio.png'" class="img-responsive" alt="Logo Del Barrio"></a>
                </div>
                <div class="col-xs-6">
                    <img v-bind:src="'/static/img/logo-emprende.png'" class="img-responsive" alt="Logo Emprende" align="right"></a>
                </div>
            </div>
        </div>
    </header>
    <!-- /Header-->
    <nav id="navegacion" class="navbar navbar-default">
        <div class="container-fluid">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-left">
                    <li><a v-bind:href="'/'"><i class="fa fa-home" aria-hidden="true"></i></a></li>
                </ul>
                
                <ul class="nav navbar-nav navbar-right">
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle usuario" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Nombre Usuario <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="#"><i class="fa fa-wrench" aria-hidden="true"></i> Configuración</a></li>
                            <li><a v-on:click="logout()"><i class="fa fa-sign-out" aria-hidden="true"></i> Cerrar Sesión</a></li>
                            <li role="separator" class="divider"></li>
                            <li><a v-bind:href="'/administracion/preguntas-frecuentes'"><i class="fa fa-question-circle" aria-hidden="true"></i> Preguntas Frecuentes</a></li>
                        </ul>
                    </li>
                </ul>
                <form class="input-group text-truncate">
                    <input class="form-control" name="search" placeholder="Buscar" autocomplete="off" autofocus="autofocus" type="text">
                    <div class="input-group-btn">
                        <button class="btn btn-outline-success" type="submit"><i class="fa fa-search" aria-hidden="true"></i></button>
                    </div>
                </form>
            </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
    </nav>
    <router-view></router-view>
    <footer class="container-fluid">
        <div class="container">
        </div>
    </footer>
  </div>
</template>

<script>
  import controller from '@/components/navbar/controller/layoutcontroller.js'
  export default {
    name: 'login',
    methods: {
      logout (event) {
        controller.logout()
      }
    }
  }
</script>
