import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/za30h5bbb.css';
import '../../css/f/f7qu89bfn.css';
import '../../css/n/nzc3r4b2a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="za30h5bbb"/><path class="f7qu89bfn"/><path class="nzc3r4b2a"/>`,
		"fallback": "energy-icons:workspace-48",
	});
}

export default Component;
