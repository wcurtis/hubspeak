class V1::SoundboardsController < ApplicationController
  # GET /soundboards
  # GET /soundboards.json
  def index
    @soundboards = Soundboard.all

    render json: @soundboards
  end

  # GET /soundboards/1
  # GET /soundboards/1.json
  def show
    @soundboard = Soundboard.find(params[:id])

    render json: @soundboard
  end

  # POST /soundboards
  # POST /soundboards.json
  def create
    @soundboard = Soundboard.new(params[:soundboard])

    if @soundboard.save
      render json: @soundboard, status: :created, location: [:v1, @soundboard]
    else
      render json: @soundboard.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /soundboards/1
  # PATCH/PUT /soundboards/1.json
  def update
    @soundboard = Soundboard.find(params[:id])

    if @soundboard.update(params[:soundboard])
      head :no_content
    else
      render json: @soundboard.errors, status: :unprocessable_entity
    end
  end

  # DELETE /soundboards/1
  # DELETE /soundboards/1.json
  def destroy
    @soundboard = Soundboard.find(params[:id])
    @soundboard.destroy

    head :no_content
  end
end
