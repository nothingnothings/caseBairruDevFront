export interface UserData {
  createdAt?: string;
  updatedAt?: string;
  companyName?: string;
  current_team_id?: null | number;
  email?: string;
  email_verified_at?: null | string;
  id?: number;
  is_tabibito?: 0 | 1;
  name?: string;
  profile_photo_path?: null | string;
  profile_photo_url?: null | string;
  stamp_count?: number;
  two_factor_confirmed_at?: null | string;
}
