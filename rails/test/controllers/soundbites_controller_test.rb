require 'test_helper'

class SoundbitesControllerTest < ActionController::TestCase
  setup do
    @soundbite = soundbites(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:soundbites)
  end

  test "should create soundbite" do
    assert_difference('Soundbite.count') do
      post :create, soundbite: { name: @soundbite.name, track_id: @soundbite.track_id }
    end

    assert_response 201
  end

  test "should show soundbite" do
    get :show, id: @soundbite
    assert_response :success
  end

  test "should update soundbite" do
    put :update, id: @soundbite, soundbite: { name: @soundbite.name, track_id: @soundbite.track_id }
    assert_response 204
  end

  test "should destroy soundbite" do
    assert_difference('Soundbite.count', -1) do
      delete :destroy, id: @soundbite
    end

    assert_response 204
  end
end
