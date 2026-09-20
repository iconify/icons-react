import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s0i2i7b5z.css';
import '../../css/c/c1si20bso.css';
import '../../css/z/zu2isd-ug.css';
import '../../css/j/jn7n1vaya.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="s0i2i7b5z"/><path class="c1si20bso"/><circle class="zu2isd-ug"/><path class="jn7n1vaya"/></g>`,
		"fallback": "lucide:whole-word",
	});
}

export default Component;
