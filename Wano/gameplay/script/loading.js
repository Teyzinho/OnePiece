function removerLoading() {
    const loading = document.querySelector('.loading');
    loading.style.opacity ="0";
    setTimeout(function() {
        document.body.removeChild(loading);
      }, 300);
  }
  window.onload = function() {
    setTimeout(function() {
      // Simula o carregamento atrasado dos arquivos
      removerLoading();
    }, 500);
  };