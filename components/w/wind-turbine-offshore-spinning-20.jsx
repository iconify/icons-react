import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vqnj4_bfn.css';
import '../../css/i/icilmibae.css';
import '../../css/x/xe4fz0b7n.css';
import '../../css/p/p-1abpbng.css';
import '../../css/g/gh15labbn.css';
import '../../css/p/piqugpj_k.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vqnj4_bfn"/><path class="icilmibae"/><path class="xe4fz0b7n"/><path class="p-1abpbng"/><path class="gh15labbn"/><path class="piqugpj_k"/>`,
		"fallback": "energy-icons:wind-turbine-offshore-spinning-20",
	});
}

export default Component;
