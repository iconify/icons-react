import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kpk85c56s.css';
import '../../css/z/zt9kpc87r.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kpk85c56s"/><path clip-rule="evenodd" class="zt9kpc87r"/>`,
		"fallback": "qlementine-icons:windows-unmaximize-16",
	});
}

export default Component;
