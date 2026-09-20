import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/n968dob1h.css';
import '../../css/c/cuivapbyy.css';
import '../../css/o/o660_cccg.css';
import '../../css/f/fenrj7bdu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="n968dob1h"/><path class="cuivapbyy"/><path class="o660_cccg"/><path class="fenrj7bdu"/></g>`,
		"fallback": "solar:widget-5-outline",
	});
}

export default Component;
