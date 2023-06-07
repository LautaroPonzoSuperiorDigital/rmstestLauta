<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Listing;
use App\Models\Rent;
use Illuminate\Http\Request;
// use Illuminate\Support\Facades\Auth;
// use App\Models\User;
use Illuminate\Support\Facades\DB;




class ListingController extends Controller
{
    // public function index()
    // {
    //     $listings = Listing::all();
    //     return response()->json(['listings' => $listings]);
    // }

    public function show($id)
    {
        $listing = Listing::find($id);
        return response()->json(['listing' => $listing]);
    }

    public function getListingDetails($listingId)
    {
        $listing = Listing::find($listingId);

        if (!$listing) {
            return response()->json(['message' => 'No se encontró el listado'], 404);
        }

        // Aquí puedes realizar cualquier otra lógica o modificaciones necesarias antes de devolver la respuesta

        return response()->json(['listing' => $listing]);
    }

    public function addListing(Request $request)
    {
        $listing = new Listing;
        $listing->location = $request->input('location');
        $listing->lot_size = $request->input('lot_size');
        $listing->house_size = $request->input('house_size');
        $listing->price = $request->input('price');
        $listing->public = $request->input('public');
        $listing->bedrooms = $request->input('bedrooms');
        $listing->bathrooms = $request->input('bathrooms');
        $listing->amentities = $request->input('amentities');
        $listing->status = 1;
        $listing->created_by = '1'; //check auth

        // if ($request->hasFile('image')) {
        //     $image = $request->file('image');
        //     $imagePath = $image->store('public/images');
        //     $listing->image = $imagePath;
        // }

        $listing->save();

        return response()->json(['listing' => $listing]);
    }


    public function updateListing(Request $request, $id)
    {
        $listing = Listing::find($id);
        if (!$listing) {
            return response()->json(['error' => 'Listing not found'], 404);
        }

        $listing->location = $request->input('location');
        $listing->lot_size = $request->input('lot_size');
        $listing->house_size = $request->input('house_size');
        $listing->price = $request->input('price');
        if ($request->input('public') == true) {
            $listing->public = 1;
        } else {
            $listing->public = 0;
        }
        $listing->bedrooms = $request->input('bedrooms');
        $listing->bathrooms = $request->input('bathrooms');
        $listing->amentities = $request->input('amentities');
        $listing->status = 1;
        $listing->created_by = '1'; //check auth

        // $listing->location = $request->input('location');
        // $listing->square_footage = $request->input('square_footage');
        // $listing->price = $request->input('price');
        // $listing->profit = $request->input('profit');
        // $listing->loss = $request->input('loss');

        // $listing->public = $request->input('public') ? 1 : 0;

        // if ($request->hasFile('image')) {
        //     $image = $request->file('image');
        //     $imagePath = $image->store('public/images');
        //     $listing->image = $imagePath;
        // }

        // if ($request->hasFile('gallery')) {
        //     $galleryImages = [];
        //     foreach ($request->file('gallery') as $file) {
        //         $galleryImagePath = $file->store('public/images');
        //         $galleryImages[] = $galleryImagePath;
        //     }
        //     $listing->gallery = $galleryImages;
        // }

        $listing->save();

        return response()->json(['listing' => $listing]);
    }

    public function deleteListing($id)
    {
        $listing = Listing::find($id);
        if (!$listing) {
            return response()->json(['error' => 'Listing not found'], 404);
        }

        // Eliminar la imagen de portada y las imágenes de la galería

        $listing->status = 2;
        $listing->save();

        return response()->json(['message' => 'Listing deleted successfully']);
    }
    
    public function recoverListing($id)
    {
        $listing = Listing::find($id);
        if (!$listing) {
            return response()->json(['error' => 'Listing not found'], 404);
        }

        // Eliminar la imagen de portada y las imágenes de la galería

        $listing->status = 1;
        $listing->save();

        return response()->json(['message' => 'Listing recover successfully']);
    }

    public function togglePublic($id)
    {
        $listing = Listing::find($id);
        if (!$listing) {
            return response()->json(['error' => 'Listing not found'], 404);
        }
        if ($listing->public != 1) {
            $listing->public = 1;
        } elseif ($listing->public != 0) {
            $listing->public = 0;
        }

        $listing->save();

        return response()->json(['message' => 'Listing toggle successfully']);
    }

    public function showListings()
    {
        $listings = Listing::where('status', 1)->get();

        return response()->json(['listings' => $listings], 200);
    }

    public function showListing($id)
    {
        $listing = Listing::find($id);
        return response()->json(['listing' => $listing]);
    }
    public function showDeletedListings()
    {
        $listings = Listing::where('status', 2)->get();

        return response()->json(['listings' => $listings], 200);
    }


    // public function showAvailableListings()
    // {
    //     $listings = Listing::whereNotExists(function ($query) {
    //         $query->select(DB::raw(1))
    //             ->from('rents')
    //             ->whereRaw('rent.listing_id = listings.id');
    //     })->get();
    //     return response()->json(['listings' => $listings], 200);
    // }
}
