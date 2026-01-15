import { LucideIcon } from 'lucide-react';

interface EventCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  category: string;
  date: string;
  prize: string;
}

const EventCard = ({ title, description, icon: Icon, category, date, prize }: EventCardProps) => {
  return (
    <div className="group relative p-6 md:p-8 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-500 overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Category Badge */}
      <div className="relative z-10 mb-4">
        <span className="px-3 py-1 text-xs font-body tracking-wider uppercase text-primary border border-primary/30 rounded-full">
          {category}
        </span>
      </div>

      {/* Icon */}
      <div className="relative z-10 w-14 h-14 flex items-center justify-center border border-border rounded-lg mb-6 group-hover:border-primary/50 transition-colors duration-300">
        <Icon className="w-7 h-7 text-primary" />
      </div>

      {/* Title */}
      <h3 className="relative z-10 font-display text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>

      {/* Description */}
      <p className="relative z-10 font-body text-muted-foreground text-sm leading-relaxed mb-6">
        {description}
      </p>

      {/* Meta Info */}
      <div className="relative z-10 flex items-center justify-between pt-4 border-t border-border">
        <span className="font-body text-xs text-muted-foreground">{date}</span>
        <span className="font-display text-sm text-primary font-semibold">{prize}</span>
      </div>
    </div>
  );
};

export default EventCard;
