// This file is auto-generated by ./bin/rails stimulus:manifest:update
// Run that command whenever you add a new controller or create them with
// ./bin/rails generate stimulus controllerName

import { application } from "./application"

import HelloController from "./hello_controller"
application.register("hello", HelloController)

import HideDivStageController from "./hide_div_stage_controller"
application.register("hide-div-stage", HideDivStageController)

import TeamSelectorController from "./team_selector_controller"
application.register("team-selector", TeamSelectorController)
