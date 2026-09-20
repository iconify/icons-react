import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/n1h-zzzse.css';
import '../../css/m/mklms3qze.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="n1h-zzzse"/><path class="mklms3qze"/></g>`,
		"fallback": "lucide-lab:whale",
	});
}

export default Component;
