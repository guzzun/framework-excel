import {$} from '@core/dom';

export const resizeHandler = (event, target) => {
  if (event.target.dataset.resize) {
    let value;
    const $resizer = $(event.target);
    // const $parent = $resizer.$el.parentNode; == nu treb de utilizate
    // const $parent = $resizer.$el.closest('.column'); == mai bun, da tot nu
    const $parent = $resizer.closest('[data-type="resizable"]');
    const coords = $parent.getCoords();
    const type = $resizer.data.resize;
    const sideProp = type === 'col' ? 'bottom' : 'right';
    $resizer.css({
      opacity: 1,
      zIndex: 999,
      [sideProp]: '-5000px',
    });

    document.onmousemove = (event) => {
      $resizer.css({opacity: 0.5});
      if (type === 'col') {
        const delta = event.pageX - coords.right;
        value = coords.width + delta;
        // $parent.$el.style.width = value + 'px';
        // $parent.css({width: value + 'px'});
        $resizer.css({right: -delta + 'px'});
      } else {
        const delta = event.pageY - coords.bottom;
        value = coords.height + delta;
        $resizer.css({bottom: -value + 'px'});
      }
    };

    document.onmouseup = () => {
      if (type === 'col') {
        target.findAll(`[data-col="${$parent.data.col}"]`)
            .forEach((cell) => (cell.style.width = value + 'px'));
        $parent.css({width: value + 'px'});
      } else {
        $parent.css({height: value + 'px'});
      }
      $resizer.css({
        opacity: 0,
        bottom: 0,
        right: 0,
      });
      document.onmouseup = null;
      document.onmousemove = null;
    };
  }
};
