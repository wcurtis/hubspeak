class V1::TracksController < ApplicationController
  # GET /tracks
  # GET /tracks.json
  def index
    @tracks = Track.all

    render json: @tracks
  end

  # GET /tracks/1
  # GET /tracks/1.json
  def show
    @track = Track.find(params[:id])

    render json: @track
  end

  # POST /tracks
  # POST /tracks.json
  def create
    @track = Track.new(track_params)

    if @track.save
      render json: @track, status: :created, location: [:v1, @track]
    else
      render json: @track.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /tracks/1
  # PATCH/PUT /tracks/1.json
  def update
    @track = Track.find(params[:id])

    if @track.update(track_params)
      head :no_content
    else
      render json: @track.errors, status: :unprocessable_entity
    end
  end

  # DELETE /tracks/1
  # DELETE /tracks/1.json
  def destroy
    @track = Track.find(params[:id])
    @track.destroy

    head :no_content
  end

  def play

    Pusher['test_channel'].trigger('my_event', {
      message: 'hello world'
    })
    
    render json: {
      :success => true
    }
  end

  private

  def track_params
    params.require(:track).permit(:name, :soundboard_id)
  end
end
