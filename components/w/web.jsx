import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/d/d__mcubxf.css';
import '../../css/y/ytqqa2b3n.css';
import '../../css/z/zakpjbh7g.css';
import '../../css/p/pi2b62bry.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="d__mcubxf"/><path class="ytqqa2b3n"/><path class="zakpjbh7g"/><path class="pi2b62bry"/></g>`,
		"fallback": "streamline-plump-color:web",
	});
}

export default Component;
