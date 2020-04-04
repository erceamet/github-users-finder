class GitHub {
  constructor() {
    this.client_id = "0b4b3d378cacc3160c2a";
    this.client_secret = "c2590b3e559acdda0e7408a475fa722a383030a4";
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const reposResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();
    const repos = await reposResponse.json();

    return {
      //prettier-ignore
      profile,
      repos,
    };
  }
}
