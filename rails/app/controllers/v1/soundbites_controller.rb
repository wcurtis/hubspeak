class V1::SoundbitesController < ApplicationController
  # GET /soundbites
  # GET /soundbites.json
  def index
    @soundbites = Soundbite.all

    render json: @soundbites
  end

  # GET /soundbites/1
  # GET /soundbites/1.json
  def show
    @soundbite = Soundbite.find(params[:id])

    render json: @soundbite
  end

  # POST /soundbites
  # POST /soundbites.json
  def create
    @soundbite = Soundbite.new(soundbite_params)

    if @soundbite.save
      render json: @soundbite, status: :created, location: [:v1, @soundbite]
    else
      render json: @soundbite.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /soundbites/1
  # PATCH/PUT /soundbites/1.json
  def update
    @soundbite = Soundbite.find(params[:id])

    if @soundbite.update(soundbite_params)
      head :no_content
    else
      render json: @soundbite.errors, status: :unprocessable_entity
    end
  end

  # DELETE /soundbites/1
  # DELETE /soundbites/1.json
  def destroy
    @soundbite = Soundbite.find(params[:id])
    @soundbite.destroy

    head :no_content
  end

  private

  def soundbite_params
    params.require(:soundbite).permit(:audio, :track_id)
  end
end
