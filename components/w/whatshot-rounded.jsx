import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.av3eaxs2g {
  fill: currentColor;
  d: path("M12 22q-2.5 0-4.587-1.1T3.95 17.95l4.1-4.1l2.3 1.925q.3.25.688.225t.662-.3l4.3-4.3V13q0 .425.288.712T17 14t.713-.288T18 13V9q0-.425-.288-.712T17 8h-4q-.425 0-.712.288T12 9t.288.713T13 10h1.6l-3.65 3.65l-2.3-1.925q-.3-.25-.687-.225t-.663.3l-4.4 4.4q-.425-.95-.662-2.013T2 12q0-2.075.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22");
}
</style><path class="av3eaxs2g"/>`,
		"fallback": "material-symbols:whatshot-rounded",
	});
}

export default Component;
