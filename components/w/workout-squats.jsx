import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/m11-tkbvw.css';
import '../../css/n/no5gkqbxo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="m11-tkbvw"/><path class="no5gkqbxo"/></g>`,
		"fallback": "hugeicons:workout-squats",
	});
}

export default Component;
