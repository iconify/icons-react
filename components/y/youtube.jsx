import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s53vmbcgz.css';
import '../../css/v/vg_t11buy.css';
import '../../css/q/q8pnkob9v.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGLjBCKdWb"><g class="s53vmbcgz"><path class="vg_t11buy"/><path class="q8pnkob9v"/></g></mask></defs><path mask="url(#SVGLjBCKdWb)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:youtube",
	});
}

export default Component;
