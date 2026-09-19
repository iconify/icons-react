import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wm-nhl8rc.css';
import '../../css/x/xlja3acan.css';
import '../../css/n/np43tbbbg.css';
import '../../css/e/e-n1u_b2f.css';
import '../../css/g/gz9__31di.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm-nhl8rc"/><circle class="xlja3acan"/><path class="np43tbbbg"/><circle class="e-n1u_b2f"/><path class="gz9__31di"/>`,
		"fallback": "flat-color-icons:webcam",
	});
}

export default Component;
