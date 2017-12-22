class Api::PokemonController < ApplicationController
  def index
    @pokemon = Pokemon.all
  end

  def show
    @poke = Pokemon.where(id: params[:id]).includes(:items)
  end

end
