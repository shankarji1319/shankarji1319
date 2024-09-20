<?php
header('Content-Type: application/json');

// Sample product data
$products = [
    ['id' => 1, 'name' => 'Product 1', 'price' => '10.00', 'imageUrl' => 'https://via.placeholder.com/150'],
    ['id' => 2, 'name' => 'Product 2', 'price' => '20.00', 'imageUrl' => 'https://via.placeholder.com/150']
];

echo json_encode($products);
?>
