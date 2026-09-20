import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.btv_1cc6h {
  fill-rule: evenodd;
  d: path("M18.102 8.781a2.89 2.89 0 1 0 0-5.78a2.89 2.89 0 0 0 0 5.78m-12.204.014a2.89 2.89 0 1 0 0-5.78a2.89 2.89 0 0 0 0 5.78m0 12.205a2.89 2.89 0 1 0 0-5.78a2.89 2.89 0 0 0 0 5.78m15.095-2.89a2.892 2.892 0 1 1-5.784-.001a2.892 2.892 0 0 1 5.784 0");
}

.rjmt6qmfp {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M16.01 3.908L3.982 15.984l3.61 4.491l12.534-12.53z");
}

.s4qt-zk6l {
  fill: var(--svg-color--092049, #092049);
}
</style><g class="s4qt-zk6l"><path class="rjmt6qmfp"/><path clip-rule="evenodd" class="btv_1cc6h"/></g>`,
		"fallback": "token-branded:xno",
	});
}

export default Component;
