import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/h/h9qj9o6mz.css';
import '../../css/j/jv81oebrl.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGhn1zlc8X"><g class="rohhhzb0l"><rect class="h9qj9o6mz"/><path class="jv81oebrl"/></g></mask></defs><path mask="url(#SVGhn1zlc8X)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:word",
	});
}

export default Component;
