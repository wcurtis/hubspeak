require 'test_helper'

class SoundboardsControllerTest < ActionController::TestCase
  setup do
    @soundboard = soundboards(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:soundboards)
  end

  test "should create soundboard" do
    assert_difference('Soundboard.count') do
      post :create, soundboard: { name: @soundboard.name }
    end

    assert_response 201
  end

  test "should show soundboard" do
    get :show, id: @soundboard
    assert_response :success
  end

  test "should update soundboard" do
    put :update, id: @soundboard, soundboard: { name: @soundboard.name }
    assert_response 204
  end

  test "should destroy soundboard" do
    assert_difference('Soundboard.count', -1) do
      delete :destroy, id: @soundboard
    end

    assert_response 204
  end
end
