import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pq1lkzb4i.css';
import '../../css/y/y6u5j1bze.css';
import '../../css/f/f4q9vp1ai.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG13UMoesz"><g class="pq1lkzb4i"><path class="y6u5j1bze"/><path class="f4q9vp1ai"/></g></mask></defs><path mask="url(#SVG13UMoesz)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:xigua",
	});
}

export default Component;
