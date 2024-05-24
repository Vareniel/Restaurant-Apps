/* eslint-disable import/no-cycle */
/* eslint-disable no-undef */
import Detail from '../views/pages/detail';

const renderDetailPage = async () => {
  const mainContent = document.querySelector('resto-detail');
  mainContent.innerHTML = await Detail.render();
  await Detail.afterRender();

  window.location.reload();
};

export default renderDetailPage;
