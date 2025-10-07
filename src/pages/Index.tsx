import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const characters = [
  {
    id: 1,
    name: 'The Knight',
    role: 'Protagonist',
    description: 'Silent vessel created to contain the infection. Wields a nail and explores the depths of Hallownest.',
    location: 'Dirtmouth',
    type: 'character',
    icon: 'Sword',
    image: 'https://cdn.poehali.dev/files/3e6a19fb-5763-4335-bba3-64ad8264c003.jpg'
  },
  {
    id: 2,
    name: 'Hornet',
    role: 'Protector',
    description: 'Princess-protector of Hallownest. Daughter of the Pale King and Herrah the Beast.',
    location: 'Kingdom\'s Edge',
    type: 'character',
    icon: 'Zap',
    image: 'https://cdn.poehali.dev/files/f756e43a-b798-4560-8577-6fd64d47a4f8.jpg'
  },
  {
    id: 3,
    name: 'Quirrel',
    role: 'Scholar',
    description: 'A thoughtful wanderer exploring Hallownest. Once served Monomon the Teacher.',
    location: 'Various',
    type: 'character',
    icon: 'BookMarked',
    image: 'https://cdn.poehali.dev/files/2a974248-f9e0-4a54-81f4-4c565526f5c3.jpg'
  }
];

const bosses = [
  {
    id: 1,
    name: 'Hollow Knight',
    difficulty: 'Hard',
    description: 'The vessel chosen to seal the Radiance. Final guardian of the Temple of the Black Egg.',
    location: 'Temple of the Black Egg',
    type: 'boss',
    icon: 'Swords'
  },
  {
    id: 2,
    name: 'The Radiance',
    difficulty: 'Extreme',
    description: 'Ancient god of light and dreams. Source of the infection plaguing Hallownest.',
    location: 'Dream Realm',
    type: 'boss',
    icon: 'Sun'
  },
  {
    id: 3,
    name: 'Soul Master',
    difficulty: 'Medium',
    description: 'Leader of the Soul Sanctum. Became consumed by his experiments with soul magic.',
    location: 'Soul Sanctum',
    type: 'boss',
    icon: 'Ghost'
  },
  {
    id: 4,
    name: 'Mantis Lords',
    difficulty: 'Medium',
    description: 'Three noble warriors who rule over the Mantis Tribe with honor and strength.',
    location: 'Mantis Village',
    type: 'boss',
    icon: 'Flame'
  }
];

const loreEntries = [
  {
    id: 1,
    title: 'The Pale King',
    content: 'Once ruler of Hallownest, the Pale King brought civilization and sapience to the bugs through his pale light. In desperation to save his kingdom from the Radiance, he created vessels from void.',
    category: 'History'
  },
  {
    id: 2,
    title: 'The Infection',
    content: 'A plague of light and madness spread by the Radiance through dreams. It corrupts the minds of bugs, turning them into husks driven only by rage.',
    category: 'Plague'
  },
  {
    id: 3,
    title: 'Hallownest',
    content: 'A vast underground kingdom carved beneath the dying surface world. Once prosperous, now fallen to ruin and infection.',
    category: 'Kingdom'
  },
  {
    id: 4,
    title: 'The Void',
    content: 'An ancient power that exists beneath the Abyss. Neither light nor darkness, it represents emptiness and negation.',
    category: 'Power'
  }
];

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-[#0f1419] text-[#E0E0E0]">
      <nav className="border-b border-[#8B5CF6]/20 bg-[#0f1419]/95 backdrop-blur-sm fixed w-full z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-[#8B5CF6] tracking-wider">HALLOWNEST</h1>
            <div className="flex gap-6">
              {['home', 'characters', 'bosses', 'lore'].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`text-sm uppercase tracking-wider transition-colors ${
                    activeSection === section
                      ? 'text-[#8B5CF6]'
                      : 'text-[#E0E0E0] hover:text-[#8B5CF6]'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        {activeSection === 'home' && (
          <section className="min-h-[80vh] flex items-center justify-center px-4 animate-fade-in">
            <div className="text-center max-w-4xl">
              <div className="mb-8 animate-float">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-b from-[#8B5CF6] to-[#805CF6] flex items-center justify-center shadow-2xl shadow-[#8B5CF6]/50">
                  <Icon name="Crown" size={64} className="text-white" />
                </div>
              </div>
              <h2 className="text-6xl font-bold mb-6 text-[#E0E0E0]">
                Welcome to <span className="text-[#8B5CF6]">Hallownest</span>
              </h2>
              <p className="text-xl text-[#8E9196] mb-8 leading-relaxed italic">
                Beneath the fading town of Dirtmouth sleeps a kingdom of darkness and dreams. 
                Explore the forgotten highways and ruined cities of a fallen civilization. 
                Discover ancient mysteries and face deadly beasts.
              </p>
              <div className="flex gap-4 justify-center">
                <button
                  onClick={() => setActiveSection('characters')}
                  className="px-8 py-3 bg-[#8B5CF6] text-white rounded-lg hover:bg-[#805CF6] transition-colors font-semibold"
                >
                  Explore Characters
                </button>
                <button
                  onClick={() => setActiveSection('lore')}
                  className="px-8 py-3 border-2 border-[#8B5CF6] text-[#8B5CF6] rounded-lg hover:bg-[#8B5CF6]/10 transition-colors font-semibold"
                >
                  Read the Lore
                </button>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'characters' && (
          <section className="container mx-auto px-4 py-16 animate-fade-in">
            <h2 className="text-5xl font-bold mb-12 text-center text-[#8B5CF6]">Characters</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {characters.map((char) => (
                <Card
                  key={char.id}
                  className="bg-[#1a1f2c] border-[#8B5CF6]/30 hover:border-[#8B5CF6] transition-all duration-300 hover:shadow-xl hover:shadow-[#8B5CF6]/20 overflow-hidden"
                >
                  <div className="flex flex-col">
                    <div className="h-64 bg-gradient-to-br from-[#1a1f2c] via-[#8B5CF6]/20 to-[#805CF6]/30 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjOEI1Q0Y2IiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4xIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
                      {char.image ? (
                        <img 
                          src={char.image} 
                          alt={char.name}
                          className="w-40 h-40 object-contain z-10 drop-shadow-2xl"
                        />
                      ) : (
                        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#805CF6] flex items-center justify-center shadow-2xl shadow-[#8B5CF6]/50 z-10">
                          <Icon name={char.icon} size={48} className="text-white" />
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-2xl font-bold text-[#E0E0E0]">{char.name}</h3>
                        <Badge className="bg-[#805CF6] text-white">{char.role}</Badge>
                      </div>
                      <p className="text-[#8E9196] mb-3 leading-relaxed">{char.description}</p>
                      <div className="flex items-center gap-2 text-sm text-[#8B5CF6]">
                        <Icon name="MapPin" size={16} />
                        <span>{char.location}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>
        )}

        {activeSection === 'bosses' && (
          <section className="container mx-auto px-4 py-16 animate-fade-in">
            <h2 className="text-5xl font-bold mb-12 text-center text-[#8B5CF6]">Bosses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {bosses.map((boss) => (
                <Card
                  key={boss.id}
                  className="bg-[#1a1f2c] border-[#8B5CF6]/30 hover:border-[#8B5CF6] transition-all duration-300 hover:shadow-xl hover:shadow-[#8B5CF6]/20 overflow-hidden"
                >
                  <div className="flex flex-col">
                    <div className="h-48 bg-gradient-to-br from-[#1a1f2c] via-[#805CF6]/30 to-[#6E59A5]/40 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjODA1Q0Y2IiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4xIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#805CF6] to-[#6E59A5] flex items-center justify-center shadow-2xl shadow-[#805CF6]/50 z-10">
                        <Icon name={boss.icon} size={48} className="text-white" />
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-2xl font-bold text-[#E0E0E0]">{boss.name}</h3>
                        <Badge
                          className={
                            boss.difficulty === 'Extreme'
                              ? 'bg-red-600 text-white'
                              : boss.difficulty === 'Hard'
                              ? 'bg-orange-600 text-white'
                              : 'bg-yellow-600 text-white'
                          }
                        >
                          {boss.difficulty}
                        </Badge>
                      </div>
                      <p className="text-[#8E9196] mb-3 leading-relaxed">{boss.description}</p>
                      <div className="flex items-center gap-2 text-sm text-[#8B5CF6]">
                        <Icon name="MapPin" size={16} />
                        <span>{boss.location}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>
        )}

        {activeSection === 'lore' && (
          <section className="container mx-auto px-4 py-16 animate-fade-in">
            <h2 className="text-5xl font-bold mb-12 text-center text-[#8B5CF6]">Lore of Hallownest</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {loreEntries.map((entry) => (
                <Card
                  key={entry.id}
                  className="bg-[#1a1f2c] border-[#8B5CF6]/30 hover:border-[#8B5CF6] transition-all duration-300 p-8"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#8B5CF6] to-[#805CF6] flex items-center justify-center flex-shrink-0">
                      <Icon name="BookOpen" size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-2xl font-bold text-[#E0E0E0]">{entry.title}</h3>
                        <Badge className="bg-[#805CF6]/20 text-[#8B5CF6] border border-[#8B5CF6]/30">
                          {entry.category}
                        </Badge>
                      </div>
                      <p className="text-[#8E9196] leading-relaxed text-lg italic">{entry.content}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>
        )}
      </main>

      <footer className="border-t border-[#8B5CF6]/20 mt-20 py-8">
        <div className="container mx-auto px-4 text-center text-[#8E9196]">
          <p className="text-sm">
            Hallownest Encyclopedia • Inspired by Hollow Knight by Team Cherry
          </p>
        </div>
      </footer>
    </div>
  );
}