import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bd5iybchb.css';
import '../../css/f/fq_f87pib.css';
import '../../css/t/tnqxt6brg.css';
import '../../css/z/z3at7vb6h.css';
import '../../css/g/gt39z9lnz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bd5iybchb"/><path class="fq_f87pib"/><path class="tnqxt6brg"/><path class="z3at7vb6h"/><path class="gt39z9lnz"/>`,
		"fallback": "fxemoji:wineglass",
	});
}

export default Component;
