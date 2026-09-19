import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vz71dbktw.css';
import '../../css/r/rytfiabwl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vz71dbktw"/><path class="rytfiabwl"/>`,
		"fallback": "flat-color-icons:wikipedia",
	});
}

export default Component;
