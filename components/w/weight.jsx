import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lr7i11bqv.css';
import '../../css/w/w7wb25hkg.css';
import '../../css/p/p-mpqjxio.css';
import '../../css/f/flj088_0z.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG4WpSWcqi"><g class="ft5dv1b6b"><path class="lr7i11bqv"/><path class="w7wb25hkg"/><path class="p-mpqjxio"/><path class="flj088_0z"/></g></mask></defs><path mask="url(#SVG4WpSWcqi)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:weight",
	});
}

export default Component;
