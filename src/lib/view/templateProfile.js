export const profile = () => {
  const divProfile = document.createElement('div');

  const viewProfile = `
    <h2> Holi, soy el perfil :)</h2>
  `

  divProfile.innerHTML = viewProfile;

  return divProfile;
}