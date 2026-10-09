import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h92390rbo.css';
import '../../css/a/a7fz73bbw.css';
import '../../css/f/f3vfs2z_j.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h92390rbo"/><path class="a7fz73bbw"/><path class="f3vfs2z_j"/>`,
		"fallback": "energy-icons:yen-20-bold",
	});
}

export default Component;
