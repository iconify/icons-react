import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/g/g47cb4b4t.css';
import '../../css/q/qkbnnhzhh.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG7T0Ivd9S"><g class="s9cl3zbei"><rect class="g47cb4b4t"/><path class="qkbnnhzhh"/></g></mask></defs><path mask="url(#SVG7T0Ivd9S)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:word",
	});
}

export default Component;
