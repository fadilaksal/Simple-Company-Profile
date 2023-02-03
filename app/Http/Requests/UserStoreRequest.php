<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;

use App\Models\User;

class UserStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        $rule = [
            'name' => ['string', 'max:255', 'required'],
            'email' => ['email', 'max:255', Rule::unique(User::class)->ignore($this->id), 'required'],
            'password' => ['required', Password::defaults(), 'confirmed'],
            'role' => ['required', 'exists:roles,id'],
            'avatar' => ['required', 'mimes:jpg,jpeg,png', 'max:5000'],
        ];

        if ($this->isMethod('put')) {
            $rule['password'] = ['nullable', Password::defaults(), 'confirmed'];
            $rule['avatar'] = ['nullable', 'mimes:jpg,jpeg,png', 'max:5000'];
        }

        return $rule;
    }

    /**
     * Handle a passed validation attempt.
     *
     * @return void
     */
    public function passedValidation()
    {
        if ($this->has('password')) {
            $this->replace([
                'password' => Hash::make($this->input('password'))
            ]);
        }
    }
    
    public function validated($key = null, $default = null): array
    {
        if ($this->has('password')) {
            return array_merge(parent::validated(), ['password' => $this->input('password')]);
        }

        return parent::validated();
    }
}
