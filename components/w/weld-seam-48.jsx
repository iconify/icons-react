import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kpwsvx0jv.css';
import '../../css/n/n-kljywsc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kpwsvx0jv"/><path class="n-kljywsc"/>`,
		"fallback": "energy-icons:weld-seam-48",
	});
}

export default Component;
