<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;

class OrdersController extends Controller
{
    public function fetchAll(){

        $orders = Order::all();
        return $orders;
    }

    public function store(){

        $order = Order::create();
        return response()->json("added");
    }
}
