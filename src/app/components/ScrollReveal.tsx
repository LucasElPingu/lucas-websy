'use client';

import { useEffect } from 'react';

/**
 * Componente ScrollReveal - Gerencia animações e efeitos de scroll
 * Responsável por adicionar interatividade e animações suaves ao site
 */
export default function ScrollReveal() {
  useEffect(() => {
    // Função para gerenciar animações de scroll reveal
    const handleScrollReveal = () => {
      const elements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .slide-in-up');
      
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;
        
        if (isVisible) {
          element.classList.add('visible');
        }
      });
    };

    // Função para adicionar efeito parallax suave aos elementos
    const handleParallax = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('[data-parallax]');
      
      parallaxElements.forEach((element) => {
        const rate = scrolled * parseFloat(element.getAttribute('data-parallax') || '-0.5');
        (element as HTMLElement).style.transform = `translateY(${rate}px)`;
      });
    };

    // Função para adicionar efeitos de mouse em elementos específicos
    const handleMouseMove = (e: MouseEvent) => {
      const mouseElements = document.querySelectorAll('[data-mouse-effect]');
      
      mouseElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const deltaX = (x - centerX) / centerX;
        const deltaY = (y - centerY) / centerY;
        
        const intensity = parseFloat(element.getAttribute('data-mouse-effect') || '10');
        
        (element as HTMLElement).style.transform = `translate(${deltaX * intensity}px, ${deltaY * intensity}px)`;
      });
    };

    // Função para resetar efeitos de mouse quando o cursor sai da tela
    const handleMouseLeave = () => {
      const mouseElements = document.querySelectorAll('[data-mouse-effect]');
      
      mouseElements.forEach((element) => {
        (element as HTMLElement).style.transform = 'translate(0px, 0px)';
      });
    };

    // Função para smooth scroll personalizado em links âncora
    const handleSmoothScroll = () => {
      const links = document.querySelectorAll('a[href^="#"]');
      
      links.forEach((link) => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const targetId = link.getAttribute('href')?.substring(1);
          const targetElement = document.getElementById(targetId || '');
          
          if (targetElement) {
            const headerOffset = 80; // Altura do header fixo
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        });
      });
    };

    // Função para adicionar cursor personalizado (desktop apenas)
    const handleCustomCursor = () => {
      // Verificar se é desktop
      if (window.innerWidth <= 768) return;
      
      const cursor = document.createElement('div');
      cursor.className = 'custom-cursor';
      
      const cursorStyles = `
        .custom-cursor {
          width: 20px;
          height: 20px;
          border: 2px solid #68d391;
          border-radius: 50%;
          position: fixed;
          pointer-events: none;
          z-index: 9998;
          mix-blend-mode: difference;
          transition: all 0.1s ease;
          transform: translate(-50%, -50%);
        }
        
        .custom-cursor.active {
          transform: translate(-50%, -50%) scale(1.5);
          background: #68d391;
        }
        
        @media (min-width: 769px) {
          body {
            cursor: none;
          }
          
          a, button, [role="button"] {
            cursor: none;
          }
        }
      `;
      
      const style = document.createElement('style');
      style.setAttribute('data-cursor-styles', 'true');
      style.textContent = cursorStyles;
      document.head.appendChild(style);
      
      document.body.appendChild(cursor);
      
      // Seguir movimento do mouse
      document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
      });
      
      // Efeitos hover em elementos interativos
      const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
      
      interactiveElements.forEach((element) => {
        element.addEventListener('mouseenter', () => {
          cursor.classList.add('active');
        });
        
        element.addEventListener('mouseleave', () => {
          cursor.classList.remove('active');
        });
      });
    };

    // Inicializar efeitos após carregamento da página
    const initializeEffects = () => {
      handleCustomCursor();
      handleScrollReveal();
      handleSmoothScroll();
    };

    // Aguardar carregamento completo da página
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initializeEffects);
    } else {
      initializeEffects();
    }
    
    // Definir handlers uma vez para poder remover corretamente
    const scrollHandler = () => {
      handleScrollReveal();
      handleParallax();
    };

    // Event listeners para scroll e mouse
    window.addEventListener('scroll', scrollHandler);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Cleanup ao desmontar componente
    return () => {
      window.removeEventListener('scroll', scrollHandler);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);

      // Remover cursor customizado se existir
      const cursor = document.querySelector('.custom-cursor');
      if (cursor) {
        cursor.remove();
      }

      // Remover estilos do cursor se existirem
      const cursorStyles = document.querySelector('style[data-cursor-styles]');
      if (cursorStyles) {
        cursorStyles.remove();
      }
    };
  }, []);

  return null;
}
