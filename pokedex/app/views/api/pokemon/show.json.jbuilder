json.pokemon do
  json.extract! @poke.first, :id, :name, :attack, :defense, :poke_type, :moves
  json.image_url asset_path(@poke.first.image_url)}
end

json.items do
  json.array! @poke.first.items do |item|
    json.extract! item, :id, :name, :pokemon_id, :price, :happiness
    json.image_url asset_path(item.image_url)
  end
end
